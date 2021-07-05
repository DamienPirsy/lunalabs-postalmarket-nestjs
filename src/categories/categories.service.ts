import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category, CategoryDocument } from './schemas/category.schema';

@Injectable()
export class CategoriesService {

  constructor(
    @InjectModel('categories') private categoryModel: Model<CategoryDocument>
  ){}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    return await new this.categoryModel({
      ...createCategoryDto,
      createdAt: new Date(),
    }).save();
  }

  async findAll(): Promise<Category[]> {
    return this.categoryModel.find().exec();
  }

  async findOne(id: string): Promise<Category> {
    return await this.categoryModel.findById(id).exec();
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<Category> {
    return await this.categoryModel.findByIdAndUpdate(id, updateCategoryDto).exec();
  }

  async remove(id: string) {
    return await this.categoryModel.findByIdAndDelete(id).exec();
  }
}
