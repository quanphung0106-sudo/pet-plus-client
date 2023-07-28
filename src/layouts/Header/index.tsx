import React, { MouseEvent, useState } from 'react'
import { Logo } from '../../libs/assets/images/index'
import { List, ListItem, Typography } from '@mui/material'
import styles from './style.module.scss'
import clsx from 'clsx'
import { Link, NavLink } from 'react-router-dom'
import Stack from 'src/components/Stack'
import { PrimaryButton, TextButton } from 'src/components/Button'

interface NavigationListType {
  id: number
  title: string
  href: string
}

const navigationList: NavigationListType[] = [
  {
    id: 1,
    title: 'ホーム',
    href: '#!',
  },
  {
    id: 2,
    title: 'ペットを見つける',
    href: '#!',
  },
  {
    id: 3,
    title: '店舗を探す',
    href: '#!',
  },
  {
    id: 4,
    title: 'サービス',
    href: '#!',
  },
  {
    id: 5,
    title: '特集・ランキング',
    href: '#!',
  },
  {
    id: 6,
    title: 'PetPlusの想い',
    href: '#!',
  },
  {
    id: 7,
    title: 'お問い合わせ',
    href: '#!',
  },
]

const Header = () => {
  const [isHover, setIsHover] = useState(false)
  // const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null)

  const handleOnMouseEnter = (event: MouseEvent<HTMLElement>) => {
    setIsHover(true)
    // setAnchorEl(event.currentTarget)
  }

  const handleOnMouseLeave = () => {
    setIsHover(false)
    // setAnchorEl(null)
  }
  // const open = Boolean(anchorEl)

  return (
    <Stack className={styles.HeaderWrapper} direction="column" component="header" id="header">
      <Stack className={clsx(styles.Header, styles.MainContainer)}>
        <Link to="/">
          <Typography variant="h1">
            <img src={Logo} className={styles.Img} alt="logo" />
          </Typography>
        </Link>
        <List className={styles.HeaderList}>
          <ListItem>
            <Link to="#!">会社情報</Link>
          </ListItem>
          <ListItem>
            <Link to="#!">ニュースリリース</Link>
          </ListItem>
          <ListItem>
            <Link to="#!">ブリーダー様へ</Link>
          </ListItem>
          <ListItem>
            <Link to="#!">店舗用物件募集中</Link>
          </ListItem>
          <ListItem>
            <Link to="#!">よくあるご質問</Link>
          </ListItem>
        </List>
        <Stack className={styles.HeaderCta}>
          <TextButton>登録</TextButton>
          <NavLink to="/login">
            <PrimaryButton>ログイン</PrimaryButton>
          </NavLink>
        </Stack>
      </Stack>
      <Stack component="nav" className={styles.Navigation}>
        <List className={clsx(styles.NavigationList, isHover ? styles.Hover : '')}>
          {navigationList.map((navItem) => {
            return (
              <ListItem
                key={navItem.id}
                className={styles.ListItem}
                onMouseEnter={(e) => handleOnMouseEnter(e)}
                onMouseLeave={() => handleOnMouseLeave()}
              >
                <Link to={navItem.href}>{navItem.title}</Link>
              </ListItem>
            )
          })}
        </List>
      </Stack>
    </Stack>
  )
}

export default Header
