/// <reference types="astro/client" />
/* oxlint-disable typescript-eslint/no-empty-interface */
/* oxlint-disable typescript-eslint/no-empty-object-type */

import type { Runtime as CFRuntime } from '@astrojs/cloudflare';
import type { Env } from 'worker-configuration.d.ts';

type Runtime = CFRuntime.Runtime<Env>;

declare namespace App {
  interface Locals extends Runtime {
    // Add any custom properties here if needed
  }
}
