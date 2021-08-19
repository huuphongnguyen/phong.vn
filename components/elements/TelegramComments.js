export default function TelegramComments({ datatelegramdiscussion }) {
  return (
    <div>
      <script
        async
        src="https://telegram.org/js/telegram-widget.js?15"
        data-telegram-discussion={datatelegramdiscussion}
        data-comments-limit="10"
        data-color="0068FF"
        data-dark="1"
      ></script>
    </div>
  );
}
