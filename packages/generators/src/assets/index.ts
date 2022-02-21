import assetIBMPlexMonoMediumURLRelative from './IBMPlexMono-Medium.ttf?url';

export const assetIBMPlexMonoMediumURL = new URL(
  assetIBMPlexMonoMediumURLRelative,
  window.location.href
).href;
