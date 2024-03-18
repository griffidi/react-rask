'use client';

import {
  Button,
  Menu,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
} from '@fluentui/react-components';
import { LockOpenFilled, MoreVertical24Filled, PersonSettingsFilled } from '@fluentui/react-icons';
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
      </nav>

      <Menu>
        <MenuTrigger disableButtonEnhancement>
          <Button
            appearance="transparent"
            size="small"
            icon={<MoreVertical24Filled />}
          />
        </MenuTrigger>

        <MenuPopover>
          <MenuList>
            <MenuItem icon={<PersonSettingsFilled />}>Profile</MenuItem>
            <MenuItem icon={<LockOpenFilled />}>Logout</MenuItem>
          </MenuList>
        </MenuPopover>
      </Menu>
    </header>
  );
}
