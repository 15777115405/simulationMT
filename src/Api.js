export default class Api {






    constructor(){
        this.discount= 'http://api.meituan.com/group/v1/deal/topic/discount/city/1?ci=1&client=iphone&movieBundleVersion=100&msid=48E2B810-805D-4821-9CDD-D5C9E01BC98A2015-06-17-14-50363&userid=10086&utm_campaign=AgroupBgroupD100Fab_chunceshishuju__a__a___b1junglehomepagecatesort__b__leftflow___ab_gxhceshi__nostrategy__leftflow___ab_gxhceshi0202__b__a___ab_pindaochangsha__a__leftflow___ab_xinkeceshi__b__leftflow___ab_gxtest__gd__leftflow___ab_gxh_82__nostrategy__leftflow___ab_pindaoshenyang__a__leftflow___i_group_5_2_deallist_poitype__d__d___ab_b_food_57_purepoilist_extinfo__a__a___ab_trip_yidizhoubianyou__b__leftflow___ab_i_group_5_3_poidetaildeallist__a__b___ab_waimaizhanshi__b__b1___a20141120nanning__m1__leftflow___ab_pindaoquxincelue__a__leftflow___ab_i_group_5_5_onsite__b__b___ab_i_group_5_6_searchkuang__a__leftflow&utm_content=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&utm_medium=iphone&utm_source=AppStore&utm_term=5.7&uuid=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&version_name=5.7',

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