function handler(event) {
    var request = event.request;
    var host = request.headers.host.value;
    
    if (host === 'karol-leszczynski.pl') {
        return {
            statusCode: 301,
            statusDescription: 'Moved Permanently',
            headers: {
                'location': { value: 'https://www.karol-leszczynski.pl' + request.uri }
            }
        };
    }
    
    return request;
}
