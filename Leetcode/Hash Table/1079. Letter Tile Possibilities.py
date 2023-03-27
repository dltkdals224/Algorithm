# 2023.03.27
import itertools

class Solution(object):
    def numTilePossibilities(self, tiles):
        ans = 0
        dic = {}

        for length in range(len(tiles)):
            for target in itertools.permutations(tiles,length+1):
                if(target not in dic):
                    dic[target]=True
        
        return len(dic)
