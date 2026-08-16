import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { gitConfig } from './shared';
import Image from 'next/image';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      // JSX supported
      title: (
          <div className="flex items-center gap-2 select-none">
            <Image
              src="https://raw.githubusercontent.com/Baseryn/zcore-docs/master/public/favico.png"
              alt="ZCore Logo"
              width={24}
              height={24}
              className="object-contain"
            />
            <span className="font-bold text-[15px] tracking-tight text-zinc-900 dark:text-zinc-50">
              ZCore
            </span>
          </div>
        ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}