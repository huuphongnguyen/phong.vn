export default function TelegramComments({ datatelegramdiscussion }) {
  return (
    <div>
      <script
        async
        src="https://telegram.org/js/telegram-widget.js?15"
        data-telegram-discussion={datatelegramdiscussion}
        data-comments-limit="5"
        data-color="343638"
        data-dark="1"
        data-dark-color="FFFFFF"
      ></script>
    </div>
  );
}
