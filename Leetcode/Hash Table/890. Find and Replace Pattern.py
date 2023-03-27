# 2023.03.27
class Solution(object):
    def findAndReplacePattern(self, words, pattern):
        ans_arr = []
        fixed_pattern = self.patterningWord(pattern)

        for word in words:
            pattern = self.patterningWord(word)
            if(pattern == fixed_pattern):
                ans_arr.append(word)

        return ans_arr

    def patterningWord(self, word):
        new_pattern_idx = 0
        return_arr = []
        dic = {}

        for target in word:
            if(target in dic):
                return_arr.append(dic[target])
            else:
                dic[target] = new_pattern_idx
                return_arr.append(new_pattern_idx)
                new_pattern_idx += 1
        
        return return_arr
