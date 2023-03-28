# 2023.03.28
class Solution(object):
    def partitionString(self, s):
        ans_arr = []
        partition = []

        string_to_list = list(s)

        for char in string_to_list:
            if(char not in partition):
                partition.append(char)
            else:
                ans_arr.append(('').join(partition))
                partition = []
                partition.append(char)
        
        if(len(partition)):
            ans_arr.append(('').join(partition))

        return len(ans_arr)