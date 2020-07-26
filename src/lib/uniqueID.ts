import md5 from 'md5';

export default function generator(seed: string) {
    return md5(new Date() + seed);
}