import sys, json

#Read data from stdin
def read_in():
    lines = sys.stdin.readlines()
    #Since our input would only be having one line, parse our JSON data from that
    return json.loads(lines[0])

    import sys
    data = sys.stdin.readlines()
    print "Counted", len(data), "lines."

def main():
    #get our data as an array from read_in()
    lines = read_in()

    #rank the lines somehow
    ranked_lines = lines
    
    return lines;

#start process
if __name__ == '__main__':
    main()