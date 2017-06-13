import {
  markupMenu
} from './markup-menu';
markupMenu(window.document);
import tabs from "./tabs"

$(() => {
  tabs();
  $('.block__btn').on('click', function () {
    $('.block__square').toggleClass('active');
  })
});
