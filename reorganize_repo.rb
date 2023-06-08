require 'fileutils'

# moves new solutions into difficulty folders
Dir.each_child(__dir__) do |child_dir_name|
    if child_dir_name.match /^\d+/ 
        cur_dir = "#{__dir__}/#{child_dir_name}"
        Dir.each_child(cur_dir) do |filename|
            if filename == 'README.md'
                first_line = File.open("#{cur_dir}/#{filename}", &:readline)
                difficulty = case first_line[first_line.index('h3') + 3]
                    when 'E' 'easy'
                    when 'M' 'medium'
                    else 'hard'
                end
                FileUtils.mv(cur_dir, "#{__dir__}/#{difficulty}/#{child_dir_name}")
            end
        end
    end
end
