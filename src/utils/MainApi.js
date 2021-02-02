export class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    getHeader() {
        const token = localStorage.getItem('token');
        return {
            ...this._headers,
            Authorization: `Bearer ${token}`,
        }
    }

    _checkStatus(res) {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
    }

    getArticles() {
        return fetch(`${this._baseUrl}/articles`, {
            headers: this.getHeader(),
        })
            .then(this._checkStatus);
    }

    getUserData() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this.getHeader(),
        })
            .then(this._checkStatus);
    }

    postArticles(data) {
        return fetch(`${this._baseUrl}/articles`, {
            headers: this.getHeader(),
            method: 'POST',
            body: JSON.stringify({
                keyword: data.keyword,
                title: data.title,
                text: data.description,
                date: data.publishedAt,
                source: data.source.name,
                link: data.url,
                image: data.urlToImage,
            })
        })
            .then(this._checkStatus);
    }

    deleteArticle(articleId) {
        return fetch(`${this._baseUrl}/articles/${articleId}`, {
            headers: this.getHeader(),
            method: 'DELETE'
        })
            .then(this._checkStatus);
    }
}

export const api = new Api({
    baseUrl: 'https://api.newsinthecloud.students.nomoredomains.monster',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
}); 