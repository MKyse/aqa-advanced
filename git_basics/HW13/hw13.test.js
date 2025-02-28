const axios = require('axios');
const { describe, test, expect, beforeAll } = require('@jest/globals');

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

api.interceptors.request.use(request => {
    console.log(`Request: ${request.method.toUpperCase()} ${request.url}`);
    return request;
});

api.interceptors.response.use(response => {
    console.log(`Response: ${response.status} ${response.config.url}`);
    return response;
});

describe('API Tests with JSONPlaceholder', () => {
    test('GET /posts should return a list of posts', async () => {
        const response = await api.get('/posts');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.data)).toBe(true);
        expect(response.data.length).toBeGreaterThan(0);
    });

    test('GET /posts/1 should return a single post', async () => {
        const response = await api.get('/posts/1');
        expect(response.status).toBe(200);
        expect(response.data).toHaveProperty('id', 1);
    });

    test('POST /posts should create a new post', async () => {
        const newPost = { title: 'foo', body: 'bar', userId: 1 };
        const response = await api.post('/posts', newPost);
        expect(response.status).toBe(201);
        expect(response.data).toHaveProperty('title', newPost.title);
        expect(response.data).toHaveProperty('body', newPost.body);
        expect(response.data).toHaveProperty('userId', newPost.userId);
    });

    test('GET /users should return a list of users', async () => {
        const response = await api.get('/users');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.data)).toBe(true);
    });

    test('POST /comments should create a new comment', async () => {
        const newComment = { postId: 1, name: 'Test User', email: 'test@example.com', body: 'Test comment' };
        const response = await api.post('/comments', newComment);
        expect(response.status).toBe(201);
        expect(response.data).toHaveProperty('postId', newComment.postId);
        expect(response.data).toHaveProperty('name', newComment.name);
    });
});
