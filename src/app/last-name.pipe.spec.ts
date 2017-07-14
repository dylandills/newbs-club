import { LastNamePipe } from './last-name.pipe';

describe('LastNamePipe', () => {
  it('create an instance', () => {
    const pipe = new LastNamePipe();
    expect(pipe).toBeTruthy();
  });
});
