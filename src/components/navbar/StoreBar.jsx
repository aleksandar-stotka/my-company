import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from "@material-ui/core"
import { ShoppingCart } from "@material-ui/icons"
import logo from '../../assets/logo.jpg'
import useStyles from "./navStyles"


const StoreBar = () => {
    const classes = useStyles()
    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant='h6' className={classes.tittle} color="inherit">
                        <img src={logo } alt="Comerc.js" height="40px" className={classes.image} />
                      
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label="Show cart items" color='inherit'>
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart/>
                            </Badge>

                        </IconButton>
                    </div>
                </Toolbar>
                
        </AppBar>
        
        </>
    )
}

export default StoreBar