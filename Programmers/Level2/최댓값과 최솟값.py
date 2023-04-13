# 2023.04.13
def solution(s):
    string_list = s.split(' ')
    max_v = string_list[0]
    min_v = string_list[0]

    for target in string_list:
        if int(target) > int(max_v):
            max_v = target
        if int(target) < int(min_v):
            min_v = target

    return min_v + ' ' + max_v