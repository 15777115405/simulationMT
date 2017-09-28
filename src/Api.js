export default class Api {
    constructor(){

        //底部导航小图标
        this.tab_img={
            home:require('./img/tabbar/home.png'),
            home_selected:require('./img/tabbar/home_selected.png'),
            nearby:require('./img/tabbar/nearby.png'),
            nearby_selected:require('./img/tabbar/nearby_selected.png'),
            stroll:require('./img/tabbar/stroll.png'),
            stroll_selected:require('./img/tabbar/stroll_selected.png'),
            order:require('./img/tabbar/order.png'),
            order_selected:require('./img/tabbar/order_selected.png'),
            mine:require('./img/tabbar/mine.png'),
            mine_selected:require('./img/tabbar/mine_selected.png'),
        };

        //主页轮播图
        this.homebanner_img=[
            require('./img/banner/1.jpg'),
            require('./img/banner/2.jpg'),
            require('./img/banner/3.jpg'),
            require('./img/banner/4.jpg'),
        ];

        //主页中部菜单栏
        this.homemenu=[
            {title:'movie',img:require('./img/Home/movie.png')},
            {title:'beautiful',img:require('./img/Home/beautyCategory.png')},
            {title:'food',img:require('./img/Home/food.png')},
            {title:'ktv',img:require('./img/Home/ktv.png')},
            {title:'more',img:require('./img/Home/more.png')},
                //五个为一行
            {title:'movie',img:require('./img/Home/movie.png')},
            {title:'more',img:require('./img/Home/more.png')},
            {title:'food',img:require('./img/Home/food.png')},
            {title:'ktv',img:require('./img/Home/ktv.png')},
            {title:'movie',img:require('./img/Home/movie.png')},
        ]




    }
}