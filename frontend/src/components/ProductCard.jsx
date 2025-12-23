import { Box, HStack, Image, Heading, Text, IconButton, useColorModeValue } from "@chakra-ui/react"
import { EditIcon, DeleteIcon } from "@chakra-ui/icons"
import { useProductStore } from "../store/product"
import { useToast } from "@chakra-ui/react"

const ProductCard = ({ product }) => {
  const textcolor = useColorModeValue("gray.600", "gray.300");
  const bg = useColorModeValue("white", "gray.800");

  const { deleteProduct } = useProductStore();
  const toast = useToast();

  const handleDeleteProduct = async (productId) => {
    const { success, message } = await deleteProduct(productId);
    if(!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        duration: 3000,
        isClosable: true
      });
    } else {
      toast({
        title: "Success",
        description: "Product deleted successfully.",
        status: "success",
        duration: 3000,
        isClosable: true
      });
  } }

  return (
    <Box 
      shadow='lg'
      rounded='lg'
      overflow='hidden'
      transition='all 0.3s'
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      bg={bg}
    >
      <Image src={product.image} alt={product.name} h={48} w='full' objectFit='cover' />

      <Box p={4}>
        <Heading as="h3" size="md" mb={2}>
          {product.name}
        </Heading>

        <Text fontWeight='bold' fontSize='xl' color={textcolor} mb={4}>
          ${product.price}
        </Text>

        <HStack spacing={2}>
          <IconButton icon={<EditIcon />} colorScheme='blue' />
          <IconButton icon={<DeleteIcon />} onClick={() => handleDeleteProduct(product._id)} colorScheme='red' />
        </HStack>
      </Box>
    <modal isOpen={isOpen} onClose={onClose}>
      
    </modal>

    </Box>
  )
};

export default ProductCard;