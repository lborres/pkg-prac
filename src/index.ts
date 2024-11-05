export function Greet(input: string): string {
  return `Hello ${input ?? "World!"}`
}

export function Ping(): string {
  return 'Pong'
}
