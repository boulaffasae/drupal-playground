import { PhpWeb } from 'php-wasm/PhpWeb.mjs';

export function GET(request: Request) {
  const php = new PhpWeb;
  return new Response(php.run('<?php phpinfo();'));
}