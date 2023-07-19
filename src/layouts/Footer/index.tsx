import React from 'react'
import {
  useTheme,
  Stack,
  Typography,
  Button,
  List,
  ListItem,
  ListSubheader,
  Divider,
} from '@mui/material'
import { CopyrightIcon, FavoriteOutlineIcon, LanguageIcon } from 'libs/icons'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  const theme = useTheme()
  return (
    <Stack
      direction="column"
      pt="100px"
      height="580px"
      sx={{ background: theme.palette.black.main }}
      color={theme.palette.white.main}
    >
      <Stack p="0 50px" direction="row">
        <Stack flex="1">
          <Typography variant="h2" fontSize="26px">
            UDA Forum
          </Typography>
          <Typography
            variant="body1"
            mt="26px"
            mb="50px"
            width="80%"
            fontSize="18px"
            lineHeight={1.4}
          >
            UDA Forum là một nền tảng học tập và trao đổi kiến thức trực tuyến với bất kỳ ai, bất kỳ
            đâu cũng có thể truy cập vào các kháo học trực tuyến.
          </Typography>
          <Button variant="contained" sx={{ width: '220px' }} startIcon={<LanguageIcon />}>
            Tiếng Việt
          </Button>
        </Stack>
        <Stack
          flex="1"
          direction="row"
          gap="50px"
          justifyContent="flex-end"
          sx={{
            '& .MuiList-root': {
              '.MuiListSubheader-root': {
                backgroundColor: 'transparent',
                color: theme.palette.white.main,
                fontSize: '22px',
                fontWeight: 600,
              },
              '.MuiListItem-root': {
                fontSize: '18px',
                fontWeight: 400,
              },
            },
          }}
        >
          <List>
            <ListSubheader>UDA Forum</ListSubheader>
            <ListItem>
              <NavLink to="#!">Về chúng tôi</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="#!">Dạy học trên UDA Forum</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="#!">Lộ trình</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="#!">Sự nghiệp</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="#!">Tin tức</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="#!">Đội chúng tôi</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="#!">Trở thành một người cộng sự</NavLink>
            </ListItem>
          </List>
          <List>
            <ListSubheader>Cộng đồng</ListSubheader>
            <ListItem>
              <NavLink to="#!">Portfolio</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="#!">Những nhà phát triển</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="#!">Lời chứng thực</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="#!">Blogs</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="#!">Giao thiệp</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="#!">Học bổng</NavLink>
            </ListItem>
          </List>
          <List>
            <ListSubheader>Nhiều hơn</ListSubheader>
            <ListItem>
              <NavLink to="#!">FAQ</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="#!">Trung tâm giúp đỡ</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="#!">Điều luật</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="#!">Sự riêng tư</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="#!">Mã sản phẩm</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="#!">Thiết lập Cookie</NavLink>
            </ListItem>
          </List>
        </Stack>
      </Stack>
      <Divider
        variant="fullWidth"
        sx={{ mt: '50px', border: `1px solid ${theme.palette.white.main}` }}
      />
      <Stack
        p="0 50px"
        direction="row"
        justifyContent="space-between"
        height="100px"
        alignItems="center"
      >
        <Stack direction="row" sx={{ '& a': { cursor: 'pointer' } }}>
          <NavLink to="#!">
            <FavoriteOutlineIcon />
          </NavLink>
          <NavLink to="#!">
            <FavoriteOutlineIcon />
          </NavLink>
          <NavLink to="#!">
            <FavoriteOutlineIcon />
          </NavLink>
          <NavLink to="#!">
            <FavoriteOutlineIcon />
          </NavLink>
          <NavLink to="#!">
            <FavoriteOutlineIcon />
          </NavLink>
        </Stack>
        <Stack direction="row" gap="5px" height="fit-content">
          <CopyrightIcon />
          <Typography variant="body1" fontSize="18px">
            UDA Forum, Inc. All rights reserved.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Footer
