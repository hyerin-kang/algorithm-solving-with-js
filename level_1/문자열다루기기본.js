function solution(s) {
  // 길이가 4 또는 6이어야 하고, 모두 숫자여야 함
  if ((s.length === 4 || s.length === 6) && /^[0-9]+$/.test(s)) {
    return true;
  }
  return false;
}
