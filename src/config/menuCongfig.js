const getMenuList = (menuList) => {

    let returnList = []
    if(menuList != null && menuList.length>0){
        menuList.map((menu)=>{
            returnList.push({
                title:menu.name,
                key:menu.url
            });
        });
    }

    return returnList;
};
export default {
    getMenuList
};

/* 
[
        {
            title:'首页',
            key:'/admin/home'
        },
        {
            title:'人员管理',
            key:'/admin/ui/buttons'
        },
        {
            title:'部门管理',
            key:'/admin/dept'
        },
        {
            title:'角色管理',
            key:'/admin/role'
        },
        {
            title:'菜单管理',
            key:'/admin/menu'
        },
    ]
*/