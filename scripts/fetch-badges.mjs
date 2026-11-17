import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const CREDLY_USER = 'krisha-elle';
const OUTPUT_PATH = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
  'src',
  'data',
  'badges.json'
);

async function main() {
  const res = await fetch(`https://www.credly.com/users/${CREDLY_USER}/badges.json`);
  if (!res.ok) {
    throw new Error(`Credly request failed: ${res.status} ${res.statusText}`);
  }
  const { data: raw } = await res.json();

  const badges = raw
    .filter((b) => b.public && b.state === 'accepted')
    .map((b) => ({
      id: b.id,
      name: b.badge_template.name,
      issuer: b.issuer?.entities?.[0]?.entity?.name ?? 'Credly',
      imageUrl: b.badge_template.image_url,
      url: b.badge_template.url,
      issuedAt: b.issued_at_date,
      expiresAt: b.expires_at_date,
    }))
    .sort((a, b) => (a.issuedAt < b.issuedAt ? 1 : -1));

  writeFileSync(OUTPUT_PATH, JSON.stringify(badges, null, 2) + '\n');
  console.log(`Wrote ${badges.length} badges to ${OUTPUT_PATH}`);
}

main().catch((err) => {
  console.error('Failed to fetch Credly badges:', err.message);
  process.exit(1);
});
