class Solution:
    def findSubstring(self, s: str, words: List[str]) -> List[int]:
        if not words:
            return []
        ret = []
        temp = []
        length = len(words[0])
        index = 0
        current = 0
        while index < len(s):
            
            if s[index: index+length] in words:
                temp.append(s[index: index+length])
                words.remove(s[index: index+length])
                index += length
            else:
                words += temp
                temp = []
                index = current + 1
                current = index
            if len(words) == 0:
                ret.append(current)
                words = temp
                temp = []
                index = current + 1
                current = index
                
        return ret