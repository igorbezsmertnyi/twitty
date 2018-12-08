String.prototype.replaceBetween = function(start, end, str) {
  return this.substring(0, start) + str + this.substring(end)
}