const grupoChat = [ 'coco', 'lulu', 'sara', 'toby', 'claudia', 'maria', 'perro']

const lang = 'es'

const connector = lang === 'en' ? ' and': ' y '

grupoChat
  .slice(0, -1)
  .join(', ')
  .concat(connector + grupoChat.slice(-1))

// ---------------- otra forma de hacerlo

new Intl.ListFormat('es', { type:
  'unit'}).format(grupoChat)

new Intl.ListFormat('en').format(grupoChat)