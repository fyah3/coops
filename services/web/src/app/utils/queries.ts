export interface TitleQuery {
  title: string;
}
export const isTitleQuery = (query: unknown): query is TitleQuery => {
  return typeof (query as TitleQuery).title === "string";
};
export interface RoomIdQuery {
  roomId: string;
}
export const isRoomIdQuery = (query: unknown): query is RoomIdQuery => {
  return typeof (query as RoomIdQuery).roomId === "string";
};
export interface NicknameQuery {
  nickname: string;
}
export const isNicknameQuery = (query: unknown): query is NicknameQuery => {
  return typeof (query as NicknameQuery).nickname === "string";
};
export type ParticipantQuery = RoomIdQuery & NicknameQuery;
export const isParticipantQuery = (
  query: unknown,
): query is ParticipantQuery => {
  return isRoomIdQuery(query) && isNicknameQuery(query);
};
