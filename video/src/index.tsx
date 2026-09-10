import { registerRoot, Composition } from 'remotion';
import { Video } from './Video';
import { FPS, W, H, DURATION_FRAMES } from './constants';

const Root = () => (
  <Composition
    id="TassettaExplainer"
    component={Video}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={W}
    height={H}
  />
);

registerRoot(Root);
