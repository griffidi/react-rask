'use client';

import { Button, Tooltip } from '@fluentui/react-components';
import { MoreVertical24Filled } from '@fluentui/react-icons';
import styles from './page.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a
          className={styles.title}
          href="/">
          rask
        </a>
        <Tooltip
          content="Account options"
          relationship="label">
          <Button
            appearance="transparent"
            size="small"
            icon={<MoreVertical24Filled />}
          />
        </Tooltip>
      </nav>
    </header>
  );
}
