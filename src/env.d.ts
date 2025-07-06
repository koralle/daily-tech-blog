import type { Env } from 'worker-configuration.d.ts';

type Runtime = import('@astrojs/cloudflare').Runtime<Env>;

declare namespace App {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface Locals extends Runtime {
    // Add any custom properties here if needed
  }
}
