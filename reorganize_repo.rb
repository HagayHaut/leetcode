require 'fileutils'

def move_to_easy_folder(dir_to_move, name_of_dir)
    FileUtils.mv(dir_to_move, "#{__dir__}/easy/#{name_of_dir}")
end

def move_to_medium_folder(dir_to_move, name_of_dir)
    FileUtils.mv(dir_to_move, "#{__dir__}/medium/#{name_of_dir}")
end

def move_to_hard_folder(dir_to_move, name_of_dir)
    FileUtils.mv(dir_to_move, "#{__dir__}/hard/#{name_of_dir}")
end

Dir.each_child(__dir__) do |child_dir_name|
    if child_dir_name.match /^\d+/ 
        cur_dir = "#{__dir__}/#{child_dir_name}"
        Dir.each_child(cur_dir) do |filename|
            if filename == 'README.md'
                first_line = File.open("#{cur_dir}/#{filename}", &:readline)
                difficulty_index = first_line.index('h3') + 3
                case first_line[difficulty_index]
                    when 'E'
                        move_to_easy_folder(cur_dir, child_dir_name)
                    when 'M'
                        move_to_medium_folder(cur_dir, child_dir_name)
                    when 'H'
                        move_to_hard_folder(cur_dir, child_dir_name)
                    else
                        puts "Unable to move folder: #{child_dir_name}"
                    end
            end
        end
    end
end
