
import value from './value';
import hello from './hello';

it('renders core module', () => {
    expect(hello+" "+value).toBe('Hello web');
})