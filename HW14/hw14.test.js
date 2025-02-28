const axios = require('axios');


async function fetchWithError() {
    try {
        await axios.get('https://invalid.url.com');
    } catch (error) {
        return error.message;
    }
}

async function fetchWithHeadersAndParams() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: { userId: 1 },
        headers: { 'Custom-Header': 'TestValue' }
    });
    return response.config;
}

jest.mock('axios');

test('fetchWithError should return an error message', async () => {
    axios.get.mockRejectedValue(new Error('Network Error'));
    const result = await fetchWithError();
    expect(result).toBe('Network Error');
});

test('fetchWithHeadersAndParams should include headers and params', async () => {
    const mockConfig = {
        params: { userId: 1 },
        headers: { 'Custom-Header': 'TestValue' }
    };
    axios.get.mockResolvedValue({ config: mockConfig });
    const result = await fetchWithHeadersAndParams();
    expect(result.params).toEqual({ userId: 1 });
    expect(result.headers).toEqual({ 'Custom-Header': 'TestValue' });
});

test('Mocking Axios successful response', async () => {
    axios.get.mockResolvedValue({ data: { message: 'Success' } });
    const response = await axios.get('https://example.com');
    expect(response.data).toEqual({ message: 'Success' });
});

test('Mocking Axios failed response', async () => {
    axios.get.mockRejectedValue(new Error('Request failed'));
    try {
        await axios.get('https://example.com');
    } catch (error) {
        expect(error.message).toBe('Request failed');
    }
});
