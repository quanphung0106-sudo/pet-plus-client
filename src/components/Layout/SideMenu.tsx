import { ArrowDropDownRounded, ArrowDropUpRounded, TripOrigin } from '@mui/icons-material'
import { Box, Collapse, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import clsx from 'clsx'
import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { getCookie, setCookie } from 'src/libs/utils'
import { menus } from './menu'
import styles from './style.module.scss'

const SideMenu = () => {
  const menuCollapse = getCookie('menu')
  const path = useLocation().pathname
  const [selected, setSelected] = useState(path.split('/')[1] || '')

  const handleClick = (title: string) => {
    //update value
    title.toLowerCase() !== selected.toLowerCase() ? setSelected(title) : setSelected('')
    title.toLowerCase() !== menuCollapse.toLowerCase()
      ? setCookie('menu', title, '')
      : setCookie('menu', '', '')
  }

  return (
    <div className={styles.SideMenu}>
      <List className={styles.list}>
        {menus.map((item, index) => {
          if (item.children && item.children.length) {
            return (
              <div key={index}>
                <ListItem onClick={() => handleClick(item.title)} className={styles.MenuItem}>
                  <ListItemIcon
                    className={clsx(
                      styles.ListItemIcon,
                      path.includes(item.title.toLowerCase()) && styles.active,
                    )}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.title}
                    className={clsx(
                      styles.Button,
                      styles.ListText,
                      path.includes(item.title.toLowerCase()) && styles.active,
                    )}
                  />
                  <Box
                    className={clsx(
                      styles.ListIcon,
                      path.includes(item.title.toLowerCase()) && styles.active,
                    )}
                  >
                    {item.title.toLowerCase() === menuCollapse.toLowerCase() ? (
                      <ArrowDropUpRounded />
                    ) : (
                      <ArrowDropDownRounded />
                    )}
                  </Box>
                </ListItem>
                <Collapse in={item.title.toLowerCase() === menuCollapse.toLowerCase()}>
                  {item.children.map((sub, index) => {
                    return (
                      <ListItem className={styles.ListItemSub} key={index}>
                        <NavLink to={sub.path} className={styles.linkSub} key={index}>
                          <Box className={styles.iconData}>
                            {sub.path === path && <TripOrigin />}
                          </Box>
                          <ListItemText
                            primary={sub.title}
                            className={clsx(
                              styles.listItemButton,
                              path === sub.path && styles.subActive,
                            )}
                          />
                        </NavLink>
                      </ListItem>
                    )
                  })}
                </Collapse>
              </div>
            )
          } else {
            return (
              <ListItem key={index} className={styles.MenuItem}>
                <NavLink className={styles.link} to={item.path}>
                  <ListItemIcon
                    className={clsx(styles.ListItemIcon, path === item.path && styles.active)}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.title}
                    className={clsx(
                      styles.Button,
                      styles.ListText,
                      path === item.path && styles.active,
                    )}
                  />
                </NavLink>
              </ListItem>
            )
          }
        })}
      </List>
    </div>
  )
}

export default SideMenu
