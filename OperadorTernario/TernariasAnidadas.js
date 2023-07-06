const getTime = (seconds) => {
  return(
    seconds <= 60 ? 'Segundos':
    seconds <= 3600 ? 'Minutos':
    seconds <= 86400 ? 'Horas':
                        'dias'
  )
}

getTime(90)

// 