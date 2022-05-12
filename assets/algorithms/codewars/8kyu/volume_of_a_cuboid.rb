# Bob needs a fast way to calculate the volume of a cuboid with three values:
# length, width and the height of the cuboid.

# Write a function to help Bob with this calculation.






# my solution
def get_volume_of_cuboid(length, width, height)
    length * width * height
end



# better solution
def get_volume_of_cuboid(*dimensions)
    dimensions.inject(:*)
end