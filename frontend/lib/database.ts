import PocketBase from 'pocketbase/cjs';

export const pb = new PocketBase('http://localhost:8090');
pb.autoCancellation(false);
