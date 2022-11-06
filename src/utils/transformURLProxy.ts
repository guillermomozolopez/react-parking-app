function transformURLProxy(url: string): string {
  return `http://localhost:4000/${url}`;
}

export default transformURLProxy;
