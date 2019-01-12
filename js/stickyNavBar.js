var activeMenu = false;

$('.stickyUpperBar__burger').on('click', function () {
    activeStickyNavBar();
})

function activeStickyNavBar() {
    if (!activeMenu) {
        $('.navMenu').addClass('navMenu--active');
        $('.burger__first').addClass('burger__first--active');
        $('.burger__second').addClass('burger__second--active');
        $('.burger__third').addClass('burger__third--active');
        $('.stickyUpperBar__title').addClass('stickyUpperBar__title--active');
        $('.stickyUpperBar__landscapeStripe').addClass('stickyUpperBar__landscapeStripe--active');
        activeMenu = true;
    } else {
        $('.navMenu').removeClass('navMenu--active');
        $('.burger__first').removeClass('burger__first--active');
        $('.burger__second').removeClass('burger__second--active');
        $('.burger__third').removeClass('burger__third--active');
        $('.stickyUpperBar__title').removeClass('stickyUpperBar__title--active');
        $('.stickyUpperBar__landscapeStripe').removeClass('stickyUpperBar__landscapeStripe--active');
        activeMenu = false;
    }
}