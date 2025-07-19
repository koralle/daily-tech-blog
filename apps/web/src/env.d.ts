/// <reference types="astro/client" />

import type { Env } from 'worker-configuration.d.ts';

type Runtime = import('@astrojs/cloudflare').Runtime<Env>;

declare namespace App {
  interface Locals extends Runtime {
    // Add any custom properties here if needed
  }
}
