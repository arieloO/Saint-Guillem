export default function tagToPath(tag) {
  if (tag === 'histoire') {
    return '/histoire';
  }
  if (tag === 'restaurations') {
    return '/restaurations';
  }
  if (tag === 'traditions') {
    return '/traditions';
  }
  if (tag === 'qui sommes-nous') {
    return '/qui-sommes-nous';
  }
  if (tag === 'actualite') {
    return '/actualite';
  }
  return '/en-savoir-plus';
}
