const tabs = () => {

  $('.tab__link').on('click', function (e) {
    e.preventDefault();

    var $this = $(this),
        item = $this.closest('.tab__item'),
        contentItem = $('.tab__content'),
        itemPosition = item.data('class');

    contentItem.filter('.tab__content-' + itemPosition)
      .add(item)
      .addClass('active')
      .siblings()
      .removeClass('active');

  });

}
export default tabs;
