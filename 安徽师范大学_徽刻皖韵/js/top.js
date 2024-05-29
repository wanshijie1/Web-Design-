// 当页面滚动时
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    // 如果页面滚动超过 100px，则添加 scrolled 类，否则删除 scrolled 类
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.querySelector(".navbar").classList.add("scrolled");
    } else {
        document.querySelector(".navbar").classList.remove("scrolled");
    }
}
