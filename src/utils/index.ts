export const decodeEmail = (encodedEmail: string) => {
    const decoder = new TextDecoder("utf-8");
    const decodedEmail = decoder.decode(Uint8Array.from(atob(encodedEmail), c => c.charCodeAt(0)));
    return decodedEmail;
  }