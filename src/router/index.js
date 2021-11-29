import VueRouter from "vue-router";
import Login from '../pages/Login'
import Register from '../pages/Register'
import Navigation from '../pages/Navigation'
import Frontpage from '../pages/Frontpage'
import List from '../pages/List'
import SignalAdd from '../pages/SignalAdd'
import Chooseshow from '../pages/Chooseshow'
import Pic from '../pages/Pic'
import TotalAdd from '../pages/TotalAdd'
import ChooseAdd from '../pages/ChooseAdd'

export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            redirect:'/Frontpage/Login'
        },
        {
            path:'/Frontpage',
            component:Frontpage,
            children:[
            {
                path:'Login',
                component:Login
            },
            {
                path:'Register',
                component:Register
            }
            ]
        },
        {
            path:'/Navigation',
            component:Navigation,
            children:[
                {
                    path:'Chooseshow',
                    component:Chooseshow,
                    children:[
                        {
                            path:'List',
                            component:List
                        },
                        {
                            path:'pic',
                            component:Pic
                        }

                    ]
                },
                {
                    path:'ChooseAdd',
                    component:ChooseAdd,
                    children:[
                        {
                            path:'SignalAdd',
                            component:SignalAdd
                        },
                        {
                            path:'totalAdd',
                            component:TotalAdd
                        }
                    ]
                }
            ]
        }
    ]
}) 