const { stompURL } = global.ENVIRONMENT

export const config = {
    url: stompURL || 'http://localhost:8000/game',
}